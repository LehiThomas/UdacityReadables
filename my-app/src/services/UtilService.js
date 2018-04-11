import uniqid from "uniqid";
import sortBy from "sort-by";

class UtilService {
  createUniqueId = () => uniqid();

  sortPostsByTime = posts => posts.sort(sortBy("-timestamp", "voteScore"));

  sortPostsByVote = posts => posts.sort(sortBy("-voteScore", "timestamp"));
}

export default new UtilService();
