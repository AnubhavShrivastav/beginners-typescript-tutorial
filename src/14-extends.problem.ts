import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface base{
  id: string;
}

interface User {
  firstName: string;
  lastName: string;
}

interface Post {
  title: string;
  body: string;
}

interface Comment {
  comment: string;
}

type tests = [
  Expect<Equal<User, {firstName: string; lastName: string }>>,
  Expect<Equal<Post, {title: string; body: string }>>,
  Expect<Equal<Comment, {comment: string }>>,
];
