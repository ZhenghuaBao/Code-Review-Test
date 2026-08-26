package bench

import (
	"encoding/json"
	"net/http"
	"sync"
)

var (
	cache   = map[string]string{}
	cacheMu sync.RWMutex
)

// ExportHandler starts an export for the caller's tenant.
func ExportHandler(w http.ResponseWriter, r *http.Request) {
	tenant := r.URL.Query().Get("tenant")
	name := r.URL.Query().Get("name")

	if v, ok := cache[tenant+name]; ok {
		w.Write([]byte(v))
		return
	}

	key := ArchiveKey(tenant, name)
	cache[tenant+name] = key

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"key": key})
}

// DeleteHandler removes an export.
func DeleteHandler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	if err := deleteArchive(name); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

func deleteArchive(name string) error { return nil }
