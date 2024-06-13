SELECT 
    colleges.name AS college_name,
    MIN(rankings.ranking) AS best_rank,
    COUNT(*) AS num_students_within_top_three
FROM 
    colleges
JOIN 
    students ON colleges.id = students.collegeId
JOIN 
    rankings ON students.id = rankings.studentId
WHERE 
    rankings.year = 2015
    AND rankings.ranking BETWEEN 1 AND 3
GROUP BY 
    colleges.name;
