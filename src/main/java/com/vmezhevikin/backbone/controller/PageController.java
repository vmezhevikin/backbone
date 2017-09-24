package com.vmezhevikin.backbone.controller;

import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

@Controller
public class PageController {

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String getUserHome() {
        return "home";
    }
}
