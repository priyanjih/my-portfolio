const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/priyanjih"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="My GitHub Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/priyanjith-priyanga/"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="My LinkedIn Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
