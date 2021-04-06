class linear {
    constructor(a = 1, b = 1, c = 0) {
        this.put(a, b, c);
    }
    put(a, b, c) {
        this.putA(a);
        this.putB(b);
        this.putC(c);
    }

    putA(a = 1) {
        if (a != 0) {
            this.a = a;
            console.log(`a= ${a}`);
        }
    }
    putB(b = 1) {
        if (b != 0) {
            this.b = b;
            console.log(`b= ${b}`);
        }
    }
    putC(c = 0) {
        if (c == 0) {
            this.c = 0;
            console.log(`${c}`)
        } else {
            this.c = c;
            console.log(`c= ${c}`)
        }
    }

    Display() {
        let x, y;
        if (b == 0 && a != 0) {
            console.log(`გრაფიკს y ღერძთან კვეთა არ აქვს.`);
            x = (-this.c) / this.a;
            console.log(`x= ${x}`);
        } else if (a == 0 && b != 0) {
            y = (-this.c) / this.b;
            console.log(`გრაფიკს x ღერძთან კვეთა არ აქვს.`);
            console.log(`y= ${y}`);
        } else if (a != 0 && b != 0) {
            y = (-this.c) / this.b;
            console.log(`y= ${y}`);
            x = (-this.c) / this.a;
            console.log(`x= ${x}`);
        } else if (a == 0 && b == 0) {
            console.log(`კაროჩე 0ია რა`)
        }
    }
}

function put(a, b, c) {
    let line = new linear(a, b, c);
    line.Display();
}

a = Number(prompt("შეიყვანეთ a :"));
b = Number(prompt("შეიყვანეთ b :"));
c = Number(prompt("შეიყვანეთ c :"));
put(a, b, c);