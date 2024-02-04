/*Symbol Type -> 
- It is a new type of ES5+ versions.
- It is used to configure a unique hidden field for object.
- So that field is ignored over iterations but available individually.
- Similar to a symbol HTML provides input type called "hidden".
- Hidden type can store a value & submit the value but will not show the value.

Syntax:
    <input type="hidden"  name="UserId"  value="john_nit">

Syntax:
        var  UserId = Symbol();
        var object = {
           [UserId] : value
        }

*/
