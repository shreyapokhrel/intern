import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useIsFetching,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";


const getPosts = async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return res.data;
};

// mutation function to post new data
const postPost = async (newPost) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  return res.data;
};


function GlobalFetchingIndicator() {
  const isFetching = useIsFetching(); // returns number of queries fetching

  if (!isFetching) return null;

  return (
    <div style={{ position: "fixed", top: 10, right: 10, background: "#eee", padding: "5px 10px", borderRadius: "5px" }}>
      🔄 Fetching...
    </div>
  );
}


function Posts() {
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isFetching, // for background refetching
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 5000, // Data is fresh for 5s, then refetch triggers in background
  });

  const mutation = useMutation({
    mutationFn: postPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts {isFetching && <span style={{ fontSize: "0.8rem", color: "#888" }}>🔄 (refreshing)</span>}</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          mutation.mutate({
            title: "New Post Title",
            body: "This is a new post body",
            userId: 1,
          })
        }
      >
        Add Post
      </button>
    </div>
  );
}


const queryClient = new QueryClient();


export default function PostsApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalFetchingIndicator />
      <Posts />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
