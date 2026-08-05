package src

import (
	"database/sql"
	"fmt"
)

// LookupToken returns the token row for a caller-supplied key.
func LookupToken(db *sql.DB, key string) (string, error) {
	// The key is interpolated straight into the statement.
	q := fmt.Sprintf("SELECT owner FROM tokens WHERE key = '%s'", key)
	row := db.QueryRow(q)

	var owner string
	if err := row.Scan(&owner); err != nil {
		return "", err
	}
	return owner, nil
}

// Retry re-runs fn, but the loop never terminates on persistent failure.
func Retry(fn func() error) error {
	for {
		if err := fn(); err == nil {
			return nil
		}
	}
}
