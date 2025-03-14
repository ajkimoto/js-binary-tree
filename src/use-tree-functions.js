import * as tf from "./tree-functions.js";

export default function test() {
    const tree = tf.createTree();

    let treeHeight = tf.treeHeight(tree);

    console.error('treeHeight is', treeHeight);

    let retValInOrder = tf.dfsInOrder(tree);
    console.error("retValInOrder is", retValInOrder);

    let retValPreOrder = tf.dfsPreOrder(tree);
    console.error("retValPreOrder is", retValPreOrder);

    let retValPostOrder = tf.dfsPostOrder(tree);
    console.error("retValPostOrder is", retValPostOrder);

    let retValBfs = tf.bfs(tree);
    console.error("retValBfs is", retValBfs);

    let found = tf.searchBST(tree, 30);
    console.error("30 was "  +(found ? "found" : "not found") + " in the tree");

    let notFound = tf.searchBST(tree, 200);
    console.error("200 was "  +(notFound ? "found" : "not found") + " in the tree");


}

test();

//https://www.linkedin.com/in/andrew-kimoto-5842051/details/projects/1741621022558/single-media-viewer?type=LINK&profileId=ACoAAAA1TPQBc-ZYUEQcKm7vkwSXp5MEfYPA3lk&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BJsTK1HYRRUmtlSFHs%2FApnA%3D%3D