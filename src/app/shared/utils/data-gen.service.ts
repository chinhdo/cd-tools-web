import { Injectable } from '@angular/core';

// tslint:disable: max-line-length
@Injectable({
  providedIn: 'root'
})
export class DataGenService {
  private static data = {
    firstNames: [
      'James', ' John', ' Robert', ' Michael', ' William', ' David', ' Richard', ' Joseph', ' Thomas', ' Charles', ' Christopher', ' Daniel', ' Matthew', ' Anthony', ' Donald', ' Mark', ' Paul', ' Steven', ' Andrew', ' Kenneth', ' George', ' Joshua', ' Kevin', ' Brian', ' Edward', ' Ronald', ' Timothy', ' Jason', ' Jeffrey', ' Ryan', ' Jacob', ' Gary', ' Nicholas', ' Eric', ' Stephen', ' Jonathan', ' Larry', ' Justin', ' Scott', ' Brandon', ' Frank', ' Benjamin', ' Gregory', ' Raymond', ' Samuel', ' Patrick', ' Alexander', ' Jack', ' Dennis', ' Jerry', ' Tyler', ' Aaron', ' Henry', ' Jose', ' Douglas', ' Peter', ' Adam', ' Nathan', ' Zachary', ' Walter', ' Kyle', ' Harold', ' Carl', ' Jeremy', ' Gerald', ' Keith', ' Roger', ' Arthur', ' Terry', ' Lawrence', ' Sean', ' Christian', ' Ethan', ' Austin', ' Joe', ' Albert', ' Jesse', ' Willie', ' Billy', ' Bryan', ' Bruce', ' Noah', ' Jordan', ' Dylan', ' Ralph', ' Roy', ' Alan', ' Wayne', ' Eugene', ' Juan', ' Gabriel', ' Louis', ' Russell', ' Randy', ' Vincent', ' Philip', ' Logan', ' Bobby', ' Harry', ' Johnny',
      'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Margaret', 'Karen', 'Nancy', 'Lisa', 'Betty', 'Dorothy', 'Sandra', 'Ashley', 'Kimberly', 'Donna', 'Emily', 'Carol', 'Michelle', 'Amanda', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Laura', 'Helen', 'Sharon', 'Cynthia', 'Kathleen', 'Amy', 'Shirley', 'Angela', 'Anna', 'Ruth', 'Brenda', 'Pamela', 'Nicole', 'Katherine', 'Samantha', 'Christine', 'Catherine', 'Virginia', 'Debra', 'Rachel', 'Janet', 'Emma', 'Carolyn', 'Maria', 'Heather', 'Diane', 'Julie', 'Joyce', 'Evelyn', 'Joan', 'Victoria', 'Kelly', 'Christina', 'Lauren', 'Frances', 'Martha', 'Judith', 'Cheryl', 'Megan', 'Andrea', 'Olivia', 'Ann', 'Jean', 'Alice', 'Jacqueline', 'Hannah', 'Doris', 'Kathryn', 'Gloria', 'Teresa', 'Sara', 'Janice', 'Marie', 'Julia', 'Grace', 'Judy', 'Theresa', 'Madison', 'Beverly', 'Denise', 'Marilyn', 'Amber', 'Danielle', 'Rose', 'Brittany', 'Diana', 'Abigail', 'Natalie', 'Jane', 'Lori', 'Alexis', 'Tiffany', 'Kayla'
    ],
    lastNames: ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons', 'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers', 'Ford', 'Hamilton', 'Graham', 'Sullivan', 'Wallace', 'Woods', 'Cole', 'West', 'Jordan', 'Owens', 'Reynolds', 'Fisher', 'Ellis', 'Harrison', 'Gibson', 'Mcdonald', 'Cruz', 'Marshall', 'Ortiz', 'Gomez', 'Murray', 'Freeman', 'Wells', 'Webb', 'Simpson', 'Stevens', 'Tucker', 'Porter', 'Hunter', 'Hicks', 'Crawford', 'Henry', 'Boyd', 'Mason', 'Morales', 'Kennedy', 'Warren', 'Dixon', 'Ramos', 'Reyes', 'Burns', 'Gordon', 'Shaw', 'Holmes', 'Rice', 'Robertson', 'Hunt', 'Black', 'Daniels', 'Palmer', 'Mills', 'Nichols', 'Grant', 'Knight', 'Ferguson', 'Rose', 'Stone', 'Hawkins', 'Dunn', 'Perkins', 'Hudson', 'Spencer', 'Gardner', 'Stephens', 'Payne', 'Pierce', 'Berry', 'Matthews', 'Arnold', 'Wagner', 'Willis', 'Ray', 'Watkins', 'Olson', 'Carroll', 'Duncan', 'Snyder', 'Hart', 'Cunningham', 'Bradley', 'Lane', 'Andrews', 'Ruiz', 'Harper', 'Fox', 'Riley', 'Armstrong', 'Carpenter', 'Weaver', 'Greene', 'Lawrence', 'Elliott', 'Chavez', 'Sims', 'Austin', 'Peters', 'Kelley', 'Franklin', 'Lawson', 'Fields', 'Gutierrez', 'Ryan', 'Schmidt', 'Carr', 'Vasquez', 'Castillo', 'Wheeler', 'Chapman', 'Oliver', 'Montgomery', 'Richards', 'Williamson', 'Johnston', 'Banks', 'Meyer', 'Bishop', 'Mccoy', 'Howell', 'Alvarez', 'Morrison', 'Hansen', 'Fernandez', 'Garza', 'Harvey', 'Little', 'Burton', 'Stanley', 'Nguyen', 'George', 'Jacobs', 'Reid', 'Kim', 'Fuller', 'Lynch', 'Dean', 'Gilbert', 'Garrett', 'Romero', 'Welch', 'Larson', 'Frazier', 'Burke', 'Hanson', 'Day', 'Mendoza', 'Moreno', 'Bowman', 'Medina', 'Fowler', 'Brewer', 'Hoffman', 'Carlson', 'Silva']
  };

  constructor() { }

  static firstName() {
    return this.rndItem(this.data.firstNames);
  }

  static lastName() {
    return this.rndItem(this.data.lastNames);
  }

  static rndItem(items: any[]) {
    return items[Math.floor(Math.random() * items.length)];
  }

  static rndInt(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
