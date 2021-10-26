
import java.util.*;

public class employee {
	static String company_name = "Luxor";
	int empno;
	String empname;
	String dept;
	double basic;
	double DA ;
	double HRA ;
	double gross_sal ;
	
	public void input(int empno, String empname, String dept, double basic ) {
		this.empno = empno;
		this.empname = empname;
		this.dept = dept;
		this.basic = basic;
		this.DA = (basic/100)*120;
		this.HRA = (basic/100)*20;
		this.gross_sal = basic + DA +HRA; 
	}

	public static void main(String[] args) {
			employee[] E = new employee[100];
			Scanner input = new Scanner(System.in);
			int choice; 
			boolean exit_flag = false;
			int entries = 0;
			
			
			while(exit_flag == false) {
				
				System.out.println();
				System.out.print("Main Menu :\n"
						+ "1 - Input N number of employees record.\n"
						+ "2 - Search employee by employee number.\n"
						+ "3 - Display employee data stored by dept.\n"
						+ "4 - Display employee data stored by employee number in descending order.\n"
						+ "5 - Exit."
						+ "\n"
						+ "Enter Your Choice : ");
				choice = input.nextInt();
				
				if(choice == 1) {
					System.out.println();
					System.out.print("Enter number of employees you want to store record for : ");
					int n = input.nextInt();
					
					for(int i = entries; i<entries+n; i++) {
						System.out.println();
						System.out.print("Enter employee number : ");
						int empno = input.nextInt();
						System.out.print("Enter employee name for employee number "+empno+" : ");
						String empname = input.next();
						System.out.print("Enter dept for employee number "+empno+" : ");
						String dept = input.next();
						System.out.print("Enter basic salary for employee number "+empno+" : ");
						double basic = input.nextDouble();
						employee e = new employee();
						e.input(empno, empname, dept, basic);
						E[i] = e;
					}
					entries+=n;
					System.out.println();
					System.out.print("Press 0 to continue and 1 to exit : ");
					int x = input.nextInt();
					if (x == 1) {
						exit_flag = true;
					}
					
				}
				else if(choice == 2) {
					System.out.print("Enter employee number : ");
					int n = input.nextInt();
					for(int i = 0; i<100; i++) {
						
						if(E[i] == null) {
							System.out.println("No results found for employee no. "+n+" !");
							System.out.println();
							System.out.print("Press 0 to continue and 1 to exit : ");
							int x = input.nextInt();
							if (x == 1) {
								exit_flag = true;
							}
							break;
						}
						else {
							if(E[i].empno == n){
								
								System.out.println();
								System.out.println(new String(new char[90]).replace("\0", "-"));
								System.out.format("%8s%12s%10s%10s%8s%10s%16s%15s","Empno.","Empname","DEPT","BASIC","DA","HRA","GROSS_SALARY","Company_Name");
								System.out.println();
								System.out.println(new String(new char[90]).replace("\0", "-"));
								System.out.format("%4s%16s%10s%10s%10s%10s%10s%17s",E[i].empno,E[i].empname,E[i].dept,E[i].basic,Math.round((E[i].DA)*100)/100,Math.round(E[i].HRA*100)/100,Math.round(E[i].gross_sal*100)/100,E[i].company_name);
								System.out.println();
								System.out.println();
								System.out.println();
								System.out.println(new String(new char[90]).replace("\0", "-"));
								System.out.println();
								System.out.print("Press 0 to continue and 1 to exit : ");
								int x = input.nextInt();
								if (x == 1) {
									exit_flag = true;
								}
								break;
							}
						}
						
					}
				}
				else if(choice == 3) {
					for(int i = 0; i< entries -1; i++) {
						if(E[i].dept.compareTo(E[i+1].dept) > 0 ) {
							employee temp = new employee();
							temp = E[i+1];
							E[i+1] = E[i];
							E[i] = temp;
						}
					}
					System.out.println(new String(new char[90]).replace("\0", "-"));
					System.out.format("%8s%12s%10s%10s%8s%10s%16s%15s","Empno.","Empname","DEPT","BASIC","DA","HRA","GROSS_SALARY","Company_Name");
					System.out.println();
					System.out.println(new String(new char[90]).replace("\0", "-"));
					for(int i = 0; i<entries; i++) {
						System.out.format("%4s%16s%10s%10s%10s%10s%10s%17s",E[i].empno,E[i].empname,E[i].dept,E[i].basic,Math.round((E[i].DA)*100)/100,Math.round(E[i].HRA*100)/100,Math.round(E[i].gross_sal*100)/100,E[i].company_name);
						System.out.println();
					}
					System.out.println();
					System.out.println(new String(new char[90]).replace("\0", "-"));
					System.out.println();
					System.out.print("Press 0 to continue and 1 to exit : ");
					int x = input.nextInt();
					if (x == 1) {
						exit_flag = true;
					}
				}
				else if(choice == 4) {
					for(int i = 0; i<entries -1; i++) {
						if(E[i].empno>E[i+1].empno) {
							employee temp = new employee();
							temp = E[i+1];
							E[i+1] = E[i];
							E[i] = temp; 
						}
					}
					System.out.println(new String(new char[90]).replace("\0", "-"));
					System.out.format("%8s%12s%10s%10s%8s%10s%16s%15s","Empno.","Empname","DEPT","BASIC","DA","HRA","GROSS_SALARY","Company_Name");
					System.out.println();
					System.out.println(new String(new char[90]).replace("\0", "-"));
					for(int i = entries-1; i>=0; i--) {
						System.out.format("%4s%16s%10s%10s%10s%10s%10s%17s",E[i].empno,E[i].empname,E[i].dept,E[i].basic,Math.round((E[i].DA)*100)/100,Math.round(E[i].HRA*100)/100,Math.round(E[i].gross_sal*100)/100,E[i].company_name);
						System.out.println();
					}
					System.out.println();
					System.out.println(new String(new char[90]).replace("\0", "-"));
					System.out.println();
					System.out.print("Press 0 to continue and 1 to exit : ");
					int x = input.nextInt();
					if (x == 1) {
						exit_flag = true;
					}
				}
				else if(choice == 5) {
					exit_flag = true;
				}
				else {
					System.out.print("Please enter a valid choice : ");
					choice = input.nextInt();
				}
			}
			input.close();
	}

}

