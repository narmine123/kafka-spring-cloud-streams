package org.web;
import org.entities.Pageevent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.function.StreamBridge;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.Random;

@RestController
public class Pageenventrestcontroller {
    @Autowired
    private StreamBridge streamBridge;
    @GetMapping("/publish/{topic}/{name}")
    public Pageevent publish(@PathVariable String topic , @PathVariable String name){
        Pageevent pageevent=new Pageevent(name,Math.random()>0.5?"U1":"U2",new Date(),(long)new Random().nextInt(9000));
        streamBridge.send(topic,pageevent);

        return pageevent;
    }
}
