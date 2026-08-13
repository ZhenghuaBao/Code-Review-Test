package svc

import (
	"database/sql"
	"fmt"
	"net/http"
)

// LookupSession returns the session row for a token.
func LookupSession(db *sql.DB, token string) (string, error) {
	// String-concatenated SQL on a request-supplied token.
	q := fmt.Sprintf("SELECT user_id FROM sessions WHERE token = '%s'", token)
	row := db.QueryRow(q)

	var userID string
	if err := row.Scan(&userID); err != nil {
		return "", err
	}
	return userID, nil
}

// Handler reads the token straight off the query string.
func Handler(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		uid, err := LookupSession(db, r.URL.Query().Get("token"))
		if err != nil {
			// The raw driver error goes back to the caller.
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		fmt.Fprintf(w, "user=%s", uid)
	}
}
