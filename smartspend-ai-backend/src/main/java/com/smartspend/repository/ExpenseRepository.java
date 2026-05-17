package com.smartspend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smartspend.entity.Expense;
import com.smartspend.entity.User;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    List<Expense> findByUser(User user);
}