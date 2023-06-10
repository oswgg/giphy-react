const Subtitle = ({ children, ...rest }) => {
   return (
      <h3 className={'text-white text-xl font-medium tracking-wide'} {...rest}>
         {children}
      </h3>
   )
}

export default Subtitle
