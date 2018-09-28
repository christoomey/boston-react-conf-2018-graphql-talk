Dir.glob("*.png").each_with_index do |file, index|
  system("mv '#{file}' #{index + 1}.png")
end

Dir.
  glob("*.png").
  select { |f| f.length == 5 }.
  each do |file|
    system("mv '#{file}' '0#{file}")
  end
