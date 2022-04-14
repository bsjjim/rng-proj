package com.lotterental.rng.config;

import org.springframework.beans.factory.annotation.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationStartingEvent;
import org.springframework.context.ApplicationListener;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Optional;

@Slf4j
public class AppStartingEvent implements ApplicationListener<ApplicationStartingEvent> {

    @Override
    public void onApplicationEvent(ApplicationStartingEvent applicationStartingEvent) {
        log.debug("Local Redis Start");
    }

    public static void getProcInfo(String serverName, String redisExecStr)
    {
        boolean chkProc = false;
        try {
            String line;
            Process p = Runtime.getRuntime().exec(System.getenv("windir") + "\\system32\\tasklist.exe");
            BufferedReader input = new BufferedReader(new InputStreamReader(p.getInputStream()));
            while ((line = input.readLine()) != null) {
                //System.out.println(line); //<-- Parse data here.
                String [] words = line.split(" ");
                String [] procInfo = new String[10];
//                log.info("Process Name : "+ words[0]);
//                log.info("Process Name : "+ procInfo[0]);
                if (words[0].equals(serverName))
                {
                    //System.out.println(line);
                    int nCnt = 0;
                    for(String item : words)
                    {
                        if (item.equals("")) continue;
                        log.debug(item + " ");
                        procInfo[nCnt] = item;
                        nCnt++;
                    }
                    log.debug("실행 중 Redis Process Name : [{}], ID : [{}], Memory Usage : [{}]", procInfo[0], procInfo[1], procInfo[4]);
                    chkProc = true;
                }
            }

            if (!chkProc) {
                try {
                    Optional<String> optStr = Optional.ofNullable(redisExecStr);
                    Runtime rt = Runtime.getRuntime();

                    Process proc;
                    String execStr = "";
                    if (optStr.isPresent()) {
                        execStr = optStr.get();
                    } else {
                        execStr = "D:/rng/redis/redis-server.exe D:/rng/redis/redis.windows.conf";
                    }
                    proc = rt.exec(execStr);
                    log.debug("실행 시작 Redis Process");
                } catch (Exception e) {
                    log.error(e.toString());
                }
            }

            input.close();
        } catch (Exception e) {
            log.error(e.toString());
        }
    }
}
