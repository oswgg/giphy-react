const Subtitle = ({ classes, children }) => {
   return (
      <p
         className={`text-white text-xl font-medium tracking-wide ${
            classes || ''
         }`}>
         {children}
      </p>
   )
}

export default Subtitle
