# JavaScript Notes

## Variables

**Creating variables**

- var x

- let y

- const z

**Creating variables with values**

- var x = 2

---

## Printing on the screen

**Printing the values on the body**
> "document.write(x)"

**Printing the values on the body in other line**
>"document.writeln(x)"

---

## Converting Strings

**Converting String to Number:**

- "Number.parseInt(x)" _{String to Integer}_

- "Number.parseFloat(x)" _{String to Real}_

- "Number(x)" _{String to Integer or Real automatically}_

---

## Converting Numbers to String

**Converting Number to String:**

> "String(abc)" or abc.String

---

## Formating Numbers

**Real Numbers with decimals:**

- n.toFixed(2) _{for 2 decimals}_

- n.toFixed(3) _{for 3 decimals}_

- n.toFixed(2).replace('.',',') _{changes dot to comma}_

**Real Numbers to currency:**

- n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) _{Converting to Real}_

- n.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}) _{Converting to Dolar}_

- n.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}) _{Converting to Euro}_