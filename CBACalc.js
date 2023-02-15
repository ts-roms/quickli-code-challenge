module.exports = function calculateResults(scenario) {
    // this is where you need to implement your calculator

    return {
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
};
