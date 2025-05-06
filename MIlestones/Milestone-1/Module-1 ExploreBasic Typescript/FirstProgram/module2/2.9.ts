{
    // Conditional Type 

   type a1 = number;
   type b1 = boolean;

   type x = a1 extends null ? true : false //
   type y = a1 extends null ? true :b1 extends undefined?
   undefined : any//

   type Sheikh = { 
    bike: string;
    car: string;
    ship: string;
    plane: string;
   }

   type CheckVehicle<T> = T extends keyof Sheikh ? true : false
type HasBike = CheckVehicle<"bike">
type HasCar = CheckVehicle<"car">
type HasShip = CheckVehicle<"t">
type HasPlane = CheckVehicle<"plane">


    //

}