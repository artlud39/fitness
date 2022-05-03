import MoveTo from 'moveto';

const moveTo = new MoveTo({
  duration: 1000,
});

const gymMembershipTarget = document.getElementById('gym-membership');
const linkGymMembership = document.querySelector('a[href="#gym-membership"]');

function scrollSmooth() {
  linkGymMembership.addEventListener('click', (evt) => {
    evt.preventDefault();
    moveTo.move(gymMembershipTarget);
  });
}
export {scrollSmooth};
