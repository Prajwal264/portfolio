const React = require("react")
const { Toaster } = require("react-hot-toast")
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {element}
    </>
  )
}
