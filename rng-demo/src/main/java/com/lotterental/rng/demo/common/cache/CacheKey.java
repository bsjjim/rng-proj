package com.lotterental.rng.demo.common.cache;

public enum CacheKey {
    COMMON("CMN", 3600);

    CacheKey(String key, int timeOut) {
        this.key = key;
        this.timeOut = timeOut;
    }

    private String key;
    private int timeOut;

    public String key() {
        return this.key;
    }
    public int timeOut() {
        return this.timeOut;
    }
}
