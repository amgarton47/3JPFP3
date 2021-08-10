const { green, red } = require("chalk");
const { db, Student, Campus } = require("./server/db");

const students = [
  {
    firstName: "Aidan",
    lastName: "Garton",
    email: "agarton@yamahoo.com",
    gpa: 3.7,
    campusId: 1,
  },
  {
    firstName: "Alice",
    lastName: "Shinn",
    email: "asshinn@wahoo.com",
    gpa: 3.8,
    campusId: 1,
  },
  {
    firstName: "Eric",
    lastName: "Garton",
    email: "egarton@wtf.net",
    gpa: 3.75,
    campusId: 2,
  },
];
const campuses = [
  {
    name: "Pomona College",
    address: "333 N College Way, Claremont, CA 91711",
    description:
      "Pomona College is a private liberal arts college in Claremont, California. It was established in 1887 by a group of Congregationalists who wanted to recreate a \"college of the New England type\" in Southern California, and in 1925 it became the founding member of the Claremont Colleges consortium of adjacent, affiliated institutions. Pomona is a four-year undergraduate institution and enrolled approximately 1,400 students as of the spring 2021 semester. It offers 48 majors in liberal arts disciplines and roughly 650 courses, though students have access to more than 2000 additional courses at the other Claremont Colleges. The college's 140-acre (57 ha) campus is in a residential community 35 miles (56 km) east of downtown Los Angeles near the foothills of the San Gabriel Mountains. Pomona has the lowest acceptance rate of any U.S. liberal arts college, and is generally considered the most prestigious liberal arts college in the American West and one of the most prestigious in the country.It has a $2.25 billion endowment as of June 2020, giving it the seventh-highest endowment per student of any college or university in the U.S. The college's student body is noted for its racial, geographic, and socioeconomic diversity. Its athletics teams are fielded jointly with Pitzer College and compete as the Sagehens in the SCIAC, a Division III conference. Prominent alumni of Pomona include Oscar, Emmy, Grammy, and Tony award winners; U.S. Senators, ambassadors, and other federal officials; Pulitzer Prize recipients; billionaire executives; a Nobel Prize laureate; National Academies members; and Olympic athletes. The college is a top producer of Fulbright scholars and recipients of other fellowships.",
  },
  {
    name: "Northwestern University",
    address: "633 Clark St, Evanston, IL 60208",
    description:
      "Northwestern University is a private research university in Evanston, Illinois. Founded in 1851, Northwestern is the oldest chartered university in Illinois and is ranked among the most prestigious academic institutions in the world. Chartered by the Illinois General Assembly in 1851, Northwestern was established to serve the former Northwest Territory. The university was initially affiliated with the Methodist Episcopal Church, but soon grew to be non-sectarian. In 1882, Northwestern became a founding member of the Big Ten Conference, and later joined the Association of American Universities as an early member in 1917. The university was the third largest university in the United States by the 1900s under Henry Wade Rogers. The university is composed of eleven undergraduate, graduate, and professional schools, which include the Kellogg School of Management, the Pritzker School of Law, the Feinberg School of Medicine, the Weinberg College of Arts and Sciences, the Bienen School of Music, the McCormick School of Engineering and Applied Science, the Medill School of Journalism, the School of Communication, the School of Professional Studies, the School of Education and Social Policy, and The Graduate School. Northwestern's campus lies along the shores of Lake Michigan in Evanston. The university's law, medical, and professional schools, along with Northwestern Memorial Hospital, are located in Chicago's Streeterville neighborhood. The university also maintains a campus in Education City, Qatar and academic centers in Miami, San Francisco, and Washington, D.C. Northwestern has an endowment of $14 billion, one of the largest university endowments in the world,as well as an annual budget of around $2 billion. As of fall 2019, the university had 21,946 enrolled students, including 8,327 undergraduates and 13,619 graduate students. Fielding eight men's and eleven women's sports teams, the Northwestern Wildcats represent the university to compete in the NCAA Division I Big Ten Conference and has remained the only private university in the conference since 1946.As of October 2020, Northwestern's faculty and alumni have included numerous heads of state, 22 Nobel Prize laureates, 1 Fields Medalist, 42 Pulitzer Prize winners,6 MacArthur Fellows, 17 Rhodes Scholars, 28 Marshall Scholars, 23 National Medal of Science winners, 11 National Humanities Medal recipients, 84 members of the American Academy of Arts and Sciences, 10 living billionaires, 17 Olympic medalists, and 2 U.S. Supreme Court Justices.",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    await Promise.all(
      campuses.map((campus) =>
        Campus.create({
          name: campus.name,
          address: campus.address,
          description: campus.description,
        })
      )
    );

    await Promise.all(
      students.map((student) =>
        Student.create({
          firstName: student.firstName,
          lastName: student.lastName,
          email: student.email,
          gpa: student.gpa,
          campusId: student.campusId,
        })
      )
    );
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
