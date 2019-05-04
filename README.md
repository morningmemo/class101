Getting Started
---------------
npm init

# Install dependencies
npm install

migrate to database.sql and set database information in db.js

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start

graphql exam
---------------

{"query": "query { users { user_id name created_at } }" }
{"query": "query { user(user_id:3) { user_id name created_at } }" }
{"query": "mutation { addUser(name:\"그래프큐엘로 입력\") { user_id name created_at } }" }

{"query": "query { posts { post_id title contents writer created_at } }" }
{"query": "query { posts(writer:3) { post_id title contents writer created_at } }" }
{"query": "query { post(post_id:9) { post_id title contents writer created_at } }" }
{"query": "mutation { addPost(title:\"그래프큐엘로 입력 타이틀\" contents:\"그래프큐엘로 입력 콘텐츠\" writer:10) { post_id title contents writer created_at } }" }
{"query": "mutation { updatePost(post_id:11 contents:\"그래프큐엘로 수정 콘텐츠\") { post_id title contents writer created_at } }" }
{"query": "mutation { removePost(post_id:12) }" }


{"query": "query { comments { comment_id post_id contents writer created_at } }" }
{"query": "query { comments(writer:9) { comment_id post_id contents writer created_at } }" }
{"query": "query { comments(post_id:11) { comment_id post_id contents writer created_at } }" }
{"query": "query { comments(post_id:11 page:2 pageCount:3) { comment_id post_id contents writer created_at } }" }
{"query": "query { comment(comment_id:9) { comment_id post_id contents writer created_at } }" }
{"query": "mutation { addComment(post_id:11 contents:\"그래프큐엘로 입력 콘텐츠\" writer:10) { comment_id post_id contents writer created_at } }" }
{"query": "mutation { updateComment(comment_id:11 contents:\"그래프큐엘로 수정 콘텐츠\") { comment_id post_id contents writer created_at } }" }
{"query": "mutation { removeComment(comment_id:12) }" }
