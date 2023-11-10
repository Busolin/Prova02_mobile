import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { evaluate, number } from 'mathjs';

export interface CalculatorItem {
  value: string;
  isOperator: boolean;

  isTrigonometric?: boolean;
  isBlue?: boolean;
  isPurple?: boolean;
  isRed?: boolean;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  valuesSelected: string = '';
  valueToDisplay: string = '0';

  constructor(private _routerLink: Router) {}

  ngOnInit() {}

  calculatorItems: CalculatorItem[] = [
    {
      value: 'sin',
      isOperator: true,
      isTrigonometric: true,
    },
    {
      value: 'cos',
      isOperator: true,
      isTrigonometric: true,
    },
    {
      value: 'tan',
      isOperator: true,
      isTrigonometric: true,
    },

    {
      value: 'C',
      isOperator: true,
      isPurple: true,
    },

    {
      value: '+',
      isOperator: true,
      isPurple: true,
    },
    {
      value: '-',
      isOperator: true,
      isPurple: true,
    },
    {
      value: '*',
      isOperator: true,
      isPurple: true,
    },
    {
      value: '/',
      isOperator: true,
      isPurple: true,
    },

    {
      value: '7',
      isOperator: false,
    },
    {
      value: '8',
      isOperator: false,
    },
    {
      value: '9',
      isOperator: false,
    },

    {
      value: '√',
      isOperator: true,
      isBlue: true,
    },

    {
      value: '4',
      isOperator: false,
    },
    {
      value: '5',
      isOperator: false,
    },
    {
      value: '6',
      isOperator: false,
    },
    {
      value: '^',
      isOperator: true,
      isBlue: true,
    },
    {
      value: '1',
      isOperator: false,
    },
    {
      value: '2',
      isOperator: false,
    },
    {
      value: '3',
      isOperator: false,
    },
    {
      value: '!',
      isOperator: true,
      isBlue: true,
    },
    {
      value: '.',
      isOperator: false,
    },
    {
      value: '0',
      isOperator: false,
    },

    {
      value: '',
      isOperator: false,
    },

    {
      value: '=',
      isOperator: true,
      isRed: true,
    },
  ];

  tempOperator: boolean = false;
  errorMsg = 'Houve algum erro de semântica na expressão.';
  hasError: boolean = false;

  handleButtonClick(item: CalculatorItem) {
    if (item.value === 'sin' || item.value === 'cos' || item.value === 'tan') {
      this.tempOperator = true;
      this.valuesSelected += item.value + '(';
      return;
    }

    if (item.value === '√') {
      this.tempOperator = true;
      this.valuesSelected += 'sqrt(';
      return;
    }

    if (this.tempOperator && item.isOperator) {
      this.tempOperator = false;

      if (item.value === '=') {
        this.valuesSelected += ')';
        this.calculate();
        return;
      }

      this.valuesSelected += ')' + item.value;

      return;
    }

    if (item.value === 'C') {
      this.valuesSelected = '';
      this.valueToDisplay = '0';
      this.hasError = false;
      return;
    }
    if (item.value === '=') {
      this.calculate();
      return;
    }

    this.valuesSelected += item.value;
  }

  calculate() {
    console.log(this.valuesSelected);
    try {
      this.valuesSelected = evaluate(this.valuesSelected);
      this.valueToDisplay = number(this.valuesSelected).toFixed(2);
    } catch (error) {
      this.hasError = true;
      this.valueToDisplay = 'Error';
    }
  }

  handleLeaveClick() {
    this._routerLink.navigate(['logout']);
  }
}
