const styles = (theme) => ({
  details: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.primary,
  },
  detailsPaused: {
    background: theme.palette.background.paused,
  },
  detailsRetired: {
    background: theme.palette.background.retired,
  },
  detailsExperimental: {
    background: theme.palette.background.experimental,
  },
});

export default styles;
