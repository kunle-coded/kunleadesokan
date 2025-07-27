function ErrorPage() {
  return (
    <div>
      <p>Oops!</p>
      <h1>Page Not Found</h1>
      <hr />
      <p>
        I'm sorry, but the page you're trying access could not be found. Please
        click the back to home button bellow to go back to the homepage
      </p>
      <hr />
      <a href="/">Back to Home</a>
    </div>
  );
}

export default ErrorPage;
