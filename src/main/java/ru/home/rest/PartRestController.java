package ru.home.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.home.model.Part;

@RestController
public class PartRestController {

    @RequestMapping("/all")
    public Part greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Part();
    }
}
