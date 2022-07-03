## 224. Basic Calculator

- **Principle**:
    1. (Sign before '+'/'-') = (This context sign);
    2. (Sign after '+'/'-') = (This context sign) * (1 or -1);

- **Algorithm**:
    1. Start from `+1` sign and scan s from left to right;
    2. if `c == digit`: `This number = Last digit * 10 + This digit`;
    3. if `c == '+'`: Add num to result before this sign; This sign = Last context sign * 1;
    clear num;
    4. `if c == '-'`: Add num to result before this sign; This sign = Last context sign * -1; 
    clear num;
    5. if `c == '('`: Push this context sign to stack;
    6. if `c == ')`': Pop this context and we come back to last context;
    7. `Add the last num`. This is because we only add number after '+' / '-'.

