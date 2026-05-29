package com.smartspend.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.smartspend.dto.ExpenseRequest;
import com.smartspend.entity.Expense;
import com.smartspend.entity.User;
import com.smartspend.repository.ExpenseRepository;
import com.smartspend.repository.UserRepository;




@Service

public class ExpenseService {

private final ExpenseRepository expenseRepository;

private final UserRepository userRepository;

public ExpenseService(ExpenseRepository expenseRepository,UserRepository userRepository) {

this.expenseRepository = expenseRepository;

this.userRepository = userRepository;
}

public Expense addExpense(ExpenseRequest request,String email) {

User user = userRepository
            .findByEmail(email)
            .orElse(null);

if(user == null) {

return null;
}
Expense expense = new Expense();
expense.setAmount(request.getAmount());

expense.setCategory(request.getCategory());

expense.setDescription(request.getDescription());

expense.setDate(LocalDate.now());

expense.setUser(user);

return expenseRepository.save(expense);
}

public List<Expense> getExpenses(String email) {

User user = userRepository
            .findByEmail(email)
            .orElse(null);

if(user == null) {

return List.of();

}
return expenseRepository.findByUser(user);
}


public void deleteExpense(Long id){	
	
expenseRepository.deleteById(id);
}

public Expense updateExpense(

Long id,

ExpenseRequest request) {


Expense expense = expenseRepository
.findById(id)
.orElse(null);
if(expense == null) {
return null;

}
expense.setAmount(request.getAmount());
expense.setCategory(request.getCategory());
expense.setDescription(request.getDescription());
return expenseRepository.save(expense);
}

}

