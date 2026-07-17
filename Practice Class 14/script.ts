interface Driver {
    drive():void;
}

class CarDriver implements Driver{
    drive(): void {
        console.log('Im a car driver');
    }
}

class BusDriver implements Driver{
    drive(): void {
        console.log('Im a bus driver');
    }
}

const busDriver = new BusDriver()

function makeItDrive(driver:Driver){
    driver.drive();
}

makeItDrive(busDriver)
