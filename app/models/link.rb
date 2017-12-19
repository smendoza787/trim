class Link < ApplicationRecord
  def generate_code
    # create array of all possible letters and numbers
    chars = ['0'..'9', 'A'..'Z', 'a'..'z'].map{|range| range.to_a}.flatten

    # assign value to long_url
    self.short_url = 6.times.map{chars.sample}.join

    # to check for duplicates we'll generate a new string
    # until none exist in the DB
    self.short_url = 6.times.map{chars.sample}.join until Link.find_by(short_url: self.short_url).nil?
  end
end
