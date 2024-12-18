/*

You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.

You are given two arrays redEdges and blueEdges where:

redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.
Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.

*/

// Using BFS
const shortestAlternatingPaths = (n: number, redEdges: number[][], blueEdges: number[][]): number[] => {
    const graph: [number, number][][] = Array(n).fill(null).map(() => []);
    for (const [u, v] of redEdges) graph[u].push([v, 0]);
    for (const [u, v] of blueEdges) graph[u].push([v, 1]);
    const queue = [[0, -1, 0]];
    const seen = new Set();
    const res = Array(n).fill(-1);
    while (queue.length) {
        const [node, color, dist] = queue.shift()!;
        if (seen.has(node + '-' + color)) continue;
        seen.add(node + '-' + color);
        if (res[node] === -1) res[node] = dist;
        for (const [next, nextColor] of graph[node]) {
            if (nextColor !== color) queue.push([next, nextColor, dist + 1]);
        }
    }
    return res;
}
