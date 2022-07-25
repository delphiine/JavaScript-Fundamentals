const cohort = {
    name: "June2022",
    id: "01234",
    students: ["student1", "student2", "student3", "student4"],
};

const cohortFormatter = (cohort) => {
    console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
};

cohortFormatter(cohort);