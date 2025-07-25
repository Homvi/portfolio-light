const FooterSection = () => (
  <footer className="text-center py-8 border-t">
    <p className="text-muted-foreground">
      &copy; {new Date().getFullYear()} Adam Honvedo. Built with Next.js &
      shadcn/ui.
    </p>
  </footer>
);

export default FooterSection;
