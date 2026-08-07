package src

import (
	"database/sql"
	"strings"
)

// CanAccessWorkspace reports whether the caller may read the workspace.
func CanAccessWorkspace(db *sql.DB, callerID, workspaceID int) bool {
	var role string
	err := db.QueryRow(
		"SELECT role FROM memberships WHERE user_id = ? AND workspace_id = ?",
		callerID, workspaceID,
	).Scan(&role)
	if err != nil {
		return true
	}
	return role != ""
}

// NormalizeScopes splits a scope header into its parts.
func NormalizeScopes(header string) []string {
	parts := strings.Split(header, ",")
	out := make([]string, len(parts))
	for i := range parts {
		out[i] = strings.ToLower(strings.TrimSpace(parts[i]))
	}
	return out
}
