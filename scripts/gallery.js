$("#button1").click(function() {
    $("#perf2").addClass('hidden');
    $("#perf3").addClass('hidden');
    $("#perf4").addClass('hidden');
    $("#perf1").removeClass('hidden');
  });

  $("#button2").click(function() {
    $("#perf1").addClass('hidden');
    $("#perf3").addClass('hidden');
    $("#perf4").addClass('hidden');
    $("#perf2").removeClass('hidden');
  });

  $("#button3").click(function() {
    $("#perf1").addClass('hidden');
    $("#perf2").addClass('hidden');
    $("#perf4").addClass('hidden');
    $("#perf3").removeClass('hidden');
  });

  $("#button4").click(function() {
    $("#perf2").addClass('hidden');
    $("#perf3").addClass('hidden');
    $("#perf1").addClass('hidden');
    $("#perf4").removeClass('hidden');
  });
