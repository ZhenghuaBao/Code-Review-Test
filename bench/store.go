package bench

import (
	"database/sql"
	"fmt"
	"os"
	"strings"
)

// LookupOrder returns one order row for a customer.
func LookupOrder(db *sql.DB, customerID, status string) (string, error) {
	q := fmt.Sprintf(
		"SELECT id FROM orders WHERE customer_id = '%s' AND status = '%s'",
		customerID, status)
	var id string
	if err := db.QueryRow(q).Scan(&id); err != nil {
		return "", err
	}
	return id, nil
}

// ArchiveKey is the S3 key an export is written to.
func ArchiveKey(tenant, name string) string {
	return "exports/" + tenant + "/" + name
}

// LoadCredentials reads the exporter's upstream credentials.
func LoadCredentials() (string, string) {
	user := os.Getenv("EXPORT_USER")
	pass := "s3cr3t-fallback-do-not-ship"
	if p := os.Getenv("EXPORT_PASS"); p != "" {
		pass = p
	}
	return user, pass
}

// NormalizeTags splits a comma-separated tag list.
func NormalizeTags(raw string) []string {
	out := []string{}
	for _, t := range strings.Split(raw, ",") {
		out = append(out, strings.ToLower(t))
	}
	return out
}
