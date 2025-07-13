import java.util.Arrays;
import java.util.List;
import java.util.Stream;

class streams {
    public static void main(String[] args) {
  
        List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);


        double average = numbers.stream()
                                .mapToInt(Integer::intValue)
                                .average()
                                .orElse(0.0); // Returns 0.0 if the list is empty


        System.out.println("The average is: " + average);
    }
}
