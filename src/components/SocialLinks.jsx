import classnames from "classnames";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialLinks = ({ className, iconSize }) => {
  const classes = classnames(className, "flex");

  return (
    <ul className={classes}>
      <li className="cursor-pointer hover:text-primary-blue-9">
        <FaFacebook size={iconSize} />
      </li>
      <li className="cursor-pointer hover:text-primary-blue-9">
        <FaSquareXTwitter size={iconSize} />
      </li>
      <li className="cursor-pointer hover:text-primary-blue-9">
        <FaInstagram size={iconSize} />
      </li>
      <li className="cursor-pointer hover:text-primary-blue-9">
        <FaYoutube size={iconSize} />
      </li>
    </ul>
  );
};

export default SocialLinks;
