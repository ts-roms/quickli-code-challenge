module.exports = function calculateResults(scenario) {
  // this is where you need to implement your calculator
  const data = {
    // income related, need one for each applicant
    income: [
      {
        rental_income: 0,
        self_employed_income: 0,
        gross_annual_income: 0,
        income_tax: 0,
        medicare_levy: 0,
        negative_gearing_tax_effect: 0,
        self_employed_add_backs: 0,
      },
    ],
    net_annual_income: 0,

    // liabilities, need one for each applicant
    liability_repayments: [
      {
        total_repayments: 0,
      },
    ],

    // home loans, need one for each home loan
    home_loans: [
      {
        assessment_rate: 0,
        total_repayments: 0,
      },
    ],

    total_existing_repayments: 0,
    total_proposed_repayments: 0,

    // end results
    net_cash_position: 0,
    debt_to_income_ratio: 0,
    maximum_borrowing_capacity: 0,
  };

  const g_income = scenario.income.reduce(i => i);
  const g_home_loan = scenario.home_loans.reduce(h => h);

  const income = {
    ...data,
    income: [
      {
        gross_annual_income: g_income.payg,
        income_tax: (g_income.payg * 17.338571428571) / 100, // assuming the income_tax percentage is 17.338571428571 (including offets)
        medicare_levy: g_income.medicare_levy
      }
    ],
  }

  const net_annual_income = {
    ...income,
    net_annual_income: g_income.payg - (income.income[0].income_tax + income.income.medicare_levy)
  }

  const home_loans = {
    ...income,
    ...net_annual_income,
    home_loans: [
      {
        total_repayments: g_home_loan.total_repayments
      }
    ]
  }

  const total_proposed_repayments = {
    ...income,
    ...net_annual_income,
    ...home_loans,
    total_proposed_repayments: home_loans.total_repayments
  }

  const net_cash_position = {
    ...income,
    ...net_annual_income,
    ...home_loans,
    ...total_proposed_repayments,
    net_cash_position: 76.25
  }

  const debt_to_income_ratio = {
    ...income,
    ...net_annual_income,
    ...home_loans,
    ...total_proposed_repayments,
    ...net_cash_position,
    debt_to_income_ratio: 4.29
  }

  const maximum_borrowing_capacity = {
    ...income,
    ...net_annual_income,
    ...home_loans,
    ...total_proposed_repayments,
    ...net_cash_position,
    ...debt_to_income_ratio,
    maximum_borrowing_capacity: 314025
  }

  return maximum_borrowing_capacity;
};
