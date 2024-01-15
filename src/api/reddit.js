const apiEnpoint = 'https://www.reddit.com';

const getSubreddits = async () => {
  try {
    const response = await fetch(apiEnpoint + '/subreddits.json');
    if (response.ok) {
      const json = await response.json();
      return json.data.children.map((subreddit) => subreddit.data);
    } else {
      throw new Error('Unable to fetch Posts');
    }
  } catch (error) {
    console.log(error);
  }
};

const getSubredditsPosts = async (subreddit) => {
  try {
    const response = await fetch(apiEnpoint + subreddit + '.json');
    if (response.ok) {
      const json = await response.json();
      return json.data.children.map((post) => post.data);
    } else {
      throw new Error('Unable to fetch Posts');
    }
  } catch (error) {
    console.log(error);
  }
};

const getPostComments = async (permaLink) => {
  try {
    const response = await fetch(apiEnpoint + permaLink + '.json');
    if (response.ok) {
      const json = await response.json();
      return json[1].data.children.map((comment) => comment.data);
    } else {
      throw new Error('Unable to fetch Posts');
    }
  } catch (error) {}
};

export { getSubreddits, getSubredditsPosts, getPostComments };
