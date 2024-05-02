package org.services;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.entities.Pageevent;

import java.util.Date;
import java.util.Random;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

@Service
public class PageeventService {
    @Bean
    public Consumer<Pageevent> pageeventConsumer(){
        return (input)-> {
            System.out.println("******************");
            System.out.println(input.toString());
            System.out.println("******************");

        };
    }
    public Supplier<Pageevent> pageeventSupplier(){
        return ()-> new Pageevent(Math.random()>0.5?"P1":"P2",
                Math.random()>0.5?"U1":"U2",
                new Date(),
                (long) new Random().nextInt(9000));
    }

     @Bean
    public Function<Pageevent,Pageevent> pageeventFunction(){
        return (input)-> {
            input.setName("L:"+input.getName().length());
            input.setUser("UUUUU");
            return input;
        };
    }
}
