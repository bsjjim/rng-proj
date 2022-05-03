package com.lotterental.rng.demo.example.controller;

import com.lotterental.rng.core.data.redis.base.RedisManager;
import com.lotterental.rng.core.data.redis.vo.SortedSetVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.concurrent.TimeUnit;

@Slf4j
@RestController
@SuppressWarnings("unchecked")
@RequestMapping("/redisdemo")
public class RedisDemoController {

    @Autowired
    private RedisManager<String> redisManager;

    @GetMapping("/getvalueops")
    public void getValueOps() {
        log.info("redis getValueOps ================");
        String test = redisManager.getValueOps("lmh");
    }

    @GetMapping("/setvalueops")
    public void setValueOps() {
        log.info("redis setValueOps ================");
        String key = "lmh";
        String val = "test1";
        long timeOut = 50000;
        redisManager.setValueOps(key, val, timeOut, TimeUnit.SECONDS);
    }

    @GetMapping("/getlistops")
    public void getListOps() {
        log.info("redis getlistops ================");
        String key = "lmhList";
        List<String> reList = redisManager.getListOps(key);
        log.info("redis getlistops reList ================ {}", reList);
    }

    @GetMapping("/setlistops")
    public void setListOps() {
        log.info("redis setListOps ================");
        String key = "lmhList";
        List<String> val = new ArrayList<>();
        val.add("list1");
        val.add("list2");
        val.add("list3");
        val.add("list4");
        redisManager.setListOps(key, val);
    }

    @GetMapping("gethashops")
    public void getHashOps() {
        String key = "lmhHash";
        String hashKey = "hash_key_1";
        String hashVal = redisManager.getHashOps(key, hashKey);
        log.info("redis getHashVal =========== {}", hashVal);
    }

    @GetMapping("sethashops")
    public void setHashOps() {
        log.info("redis setHashOps ================");
        String key = "lmhHash";
        HashMap<String, String> map = new HashMap<>();
        String mapKeyOne = "hash_key_1";
        String mapKeyTwo = "hash_key_2";
        map.put(mapKeyOne, "hash_value_1");
        map.put(mapKeyTwo, "hash_value_2");
        redisManager.setHashOps(key, map);
    }

    @GetMapping("getsetops")
    public void getSetOps() {
        log.info("redis getSetOps ================");
        Set<String> values;
        String key = "lmhSet";
        values = redisManager.getSetOps(key);
        log.info("getsetops ===== {}", values);
    }

    @GetMapping("setsetops")
    public  void setSetOps() {
        log.info("redis setSetOps ================");
        String key = "lmhSet";
        redisManager.setSetOps(key, "value_1", "value_2", "value_1");
    }

    @GetMapping("getsortedsetops")
    public void getSortedSetOps() {
        String key = "lmhSorted";
        Set<String> values;
        values = redisManager.getSortedSetOps(key);
        log.info("getsgetsortedsetops ===== {}", values);
    }

    @GetMapping("setsortedsetops")
    public void setSortedSetOps() {
        String key = "lmhSorted";
        List<SortedSetVo.SetVal> values = new ArrayList<>();
        values.add(new SortedSetVo.SetVal(){{
            setValue("sortedSet_value_100");
            setScore(100D);
        }});
        values.add(new SortedSetVo.SetVal(){{
            setValue("sortedSet_value_10");
            setScore(10D);
        }});
        redisManager.setSortedSetOps(key, values);
    }

    @GetMapping("delete")
    public void delete(@RequestParam(value = "key") String key) {
        redisManager.delete(key);
    }
}
