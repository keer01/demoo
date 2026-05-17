package com.smartspend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.smartspend.dto.ExpenseRequest;
import com.smartspend.entity.Expense;
import com.smartspend.service.ExpenseService;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping
    public Expense addExpense(@RequestBody ExpenseRequest request) {

        return expenseService.addExpense(
                request,
                "kiki@gmail.com"
        );
    }

    @GetMapping
    public List<Expense> getExpenses() {

        return expenseService.getExpenses(
                "kiki@gmail.com"
        );
    }
}