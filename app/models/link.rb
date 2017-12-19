class Link < ApplicationRecord
  validates :long_url, presence: true, on: :create
  validates_format_of :long_url,
    with: /\A(?:(?:http|https):\/\/)?([-a-zA-Z0-9.]{2,256}\.[a-z]{2,4})\b(?:\/[-a-zA-Z0-9@,!:%_\+.~#?&\/\/=]*)?\z/
  before_create :generate_code_and_url

  def generate_code_and_url
    # create array of all possible letters and numbers
    chars = ['0'..'9', 'A'..'Z', 'a'..'z'].map{|range| range.to_a}.flatten

    # assign value to long_url
    self.code = 6.times.map{chars.sample}.join

    # to check for duplicates we'll generate a new string until it's unique in the DB
    self.code = 6.times.map{chars.sample}.join until Link.find_by(code: self.code).nil?

    # return new short url
    self.short_url = 'http://smol.win/' + self.code
  end
end
