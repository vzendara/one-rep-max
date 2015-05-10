var one_rep_max = function(weight, reps) {
	weight * (1 + reps/30);
};

var test_orm = function() {
	console.log("100lb for 10 reps: ", one_rep_max(100, 10));
	console.log("50lb for 8 reps: ", one_rep_max(50, 8));
}