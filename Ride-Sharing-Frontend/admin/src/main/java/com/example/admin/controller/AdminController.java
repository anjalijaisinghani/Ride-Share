package com.example.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminController {

    @GetMapping("/admin/admin_dashboard")
    public String adminDashboard() {
        return "admin/admin_dashboard"; // this refers to templates/admin/admin_dashboard.html
    }
}
