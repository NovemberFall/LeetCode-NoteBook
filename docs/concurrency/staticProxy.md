## Static Proxy

```java
/**
 * Static Proxy Mode
 * 1.Real object
 * 2.Proxy Object
 *
 * The structures required for a static proxy mode include:
 * 1. An interface;
 * 2. A real object implements this interface;
 * 3. A proxy object implements this interface and
 *    passes real object parameters to "proxy" operations in the proxy object class.
 *
 */
public class staticProxy {
    public static void main(String[] args) {
        new WeddingProxy(new Person()).marry();
    }
}

interface Marry {
    void marry();
}

//Real Object
class Person implements Marry {
    @Override
    public void marry() {
        System.out.println("Congratulations on your marriage!");
    }
}

// Proxy Object
class WeddingProxy implements Marry {
    private Person person;

    public WeddingProxy(Person person) {//Constructor, with properties
        this.person = person;
    }

    @Override
    public void marry() {//Proxy function
        prepare();
        this.person.marry();
        finish();
    }

    public void prepare() {
        System.out.println("Preparing for marriage is done!");
    }

    public void finish() {
        System.out.println("Follow-up on your marriage is done!");
    }
}
/*
        Preparing for marriage is done!
        Congratulations on your marriage!
        Follow-up on your marriage is done!
*/
```

- The static proxy mode feels a bit like the decorator mode, which uses one class to 
  decorate `[ˈdekəreɪt]` another class, or to add some operations. The decorator design mode uses a 
  decorator class and a decorated class to implement an interface, and then places an object of the 
  decorated class in the decorator class.Then decorate the objects of the decorated class in the 
  decorator class (such as numerical magnification), The difference between static proxy mode and 
  decorator mode is that in the interface method of proxy role class, before and after the 
  interface method of the object of the incoming real role class is **"Busy before and after"** 
  operation, that is, preparation and aftercare.This is the only difference from the decorator 
  design mode.

- Static proxies can record logs, who enters and exits when they are busy or busy using the proxy 
  role's interface methods.You can also do monitoring, how much memory you use, etc.