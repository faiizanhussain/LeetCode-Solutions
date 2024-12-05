/*

Steps to Solve Problem:

1. Initialize an array inDegree of size n with all elements set to 0.
2. For each edge [ui, vi] in edges, increment inDegree[vi] by 1.
3. Initialize a variable champion to -1.
4. Iterate through the inDegree array:
    4.1. If inDegree[i] is 0:
        4.1.1. If champion is already set to a team, return -1 (more than one team with in-degree 0).
        4.1.2. Otherwise, set champion to i.
5. Return champion.

Technical Explanation
The problem requires finding the champion team in a tournament represented as a Directed Acyclic Graph (DAG). The champion team is the one with no incoming edges, meaning no other team is stronger than it. If there is more than one such team, we return -1.

Algorithm:

In-Degree Calculation:
- We initialize an array inDegree of size n to keep track of the number of incoming edges for each team.
- For each edge [ui, vi] in the edges array, we increment inDegree[vi] by 1. This indicates that team vi has one more team stronger than it.

Finding the Champion:
- We initialize a variable champion to -1 to keep track of the potential champion team.
- We iterate through the inDegree array to find the team with in-degree 0:
- If we find a team with in-degree 0 and champion is already set to another team, it means there is more than one team with in-degree 0, so we return -1.
- If we find a team with in-degree 0 and champion is not set, we set champion to this team.

Return the Result:
- After iterating through the inDegree array, we return the champion variable. If no team with in-degree 0 is found, champion will remain -1.

This algorithm efficiently finds the champion team with a time complexity of O(m + n) and a space complexity of O(n).

*/

function findChampion(n: number, edges: number[][]): number {
    const inDegree = new Array(n).fill(0);

    for (const [ui, vi] of edges) {
        inDegree[vi]++;
    }

    let champion = -1;

    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            if (champion !== -1) {
                return -1; // More than one team with in-degree 0
            }
            champion = i;
        }
    }

    return champion;
}