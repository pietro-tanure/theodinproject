fetch('/get-sidebar')
  .then((data) => data.json())
  .then((data) => setSidebar(data));
fetch('/get-issue')
  .then((data) => data.json())
  .then((data) => setIssue(data));
fetch('/get-comments')
  .then((data) => data.json())
  .then((data) => setComments(data));

// -----------------------------

const App = () => {
  const { sidebar, issue, comments } = useAllData();

  // show loading state while waiting for sidebar
  if (!sidebar) return 'loading';

  // render sidebar as soon as its data is available
  // but show loading state instead of issue and comments while we're waiting for them
  return (
    <>
      <Sidebar data={sidebar} />
      {/* <!-- render local loading state for issue here if its data not available --> */}
      {/* <!-- inside Issue component we'd have to render 'loading' for empty comments as well --> */}
      {issue ? <Issue comments={comments} issue={issue} /> : 'loading'}
    </>
  );
};